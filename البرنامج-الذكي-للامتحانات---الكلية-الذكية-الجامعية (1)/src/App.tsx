/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, BookOpen, Hash, MapPin, GraduationCap, Info, ExternalLink, ChevronRight } from 'lucide-react';
import { EXAM_DATA, Exam } from './data/exams';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = useMemo(() => {
    return EXAM_DATA.filter(exam => 
      (exam.courseName.includes(searchTerm) || exam.courseCode.includes(searchTerm))
    );
  }, [searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12" dir="rtl">
      {/* Header Section */}
      <header className="smart-gradient text-white pt-12 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-3 rounded-2xl shadow-xl mb-6"
          >
            <GraduationCap className="w-10 h-10 text-brand" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            برنامج الامتحانات النهائية <span className="text-brand-light/80 block md:inline md:mr-2">2026/2025</span>
          </h1>
          <p className="text-brand-light/90 text-lg max-w-xl font-medium">
             الكلية الذكية الجامعية - الفصل الدراسي الثاني
          </p>
          
          <div className="mt-6 flex gap-3 flex-wrap justify-center">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              مباشر: جدول الامتحانات المحدث
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 -mt-12 relative z-20">
        {/* Search Card */}
        <div className="glass-card !bg-white p-8 rounded-3xl shadow-xl mb-8 border-none">
          <div className="relative mb-4">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <input 
              type="text" 
              placeholder="ابحث باسم المساق أو رقمه (مثلاً: أخلاقيات، 100204)..."
              className="w-full bg-slate-50 border-none rounded-2xl py-4 pr-12 pl-4 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-brand/20 transition-all text-lg shadow-inner outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
              <BookOpen className="w-4 h-4" />
              تم العثور على {filteredExams.length} مساق متاح للبحث
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-2xl mb-8 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 mt-0.5 shrink-0" />
          <div className="text-sm">
            <h4 className="font-bold mb-1">تعليمات هامة للطلاب:</h4>
            <p>يرجى التواجد قيل موعد الامتحان بساعة على الأقل وإحضار البطاقة الجامعية، يمنع إدخال الهواتف الذكية للقاعة.</p>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredExams.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-4"
              >
                {filteredExams.map((exam, index) => (
                  <motion.div
                    key={`${exam.courseCode}-${index}`}
                    variants={itemVariants}
                    layout
                    className="glass-card hover:shadow-lg hover:scale-[1.01] overflow-hidden group border-white !bg-white border-l-4 border-l-brand"
                  >
                    <div className="p-5 md:p-6 flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider mb-2">
                          <Hash className="w-3 h-3" />
                          <span>{exam.courseCode}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-brand transition-colors">
                          {exam.courseName}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2.5 text-slate-600">
                            <div className="bg-slate-100 p-2 rounded-lg text-slate-400">
                              <Calendar className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-slate-400 font-bold uppercase">التاريخ</span>
                              <span className="text-sm font-bold">{exam.date} ({exam.day})</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2.5 text-slate-600">
                            <div className="bg-slate-100 p-2 rounded-lg text-slate-400">
                              <Clock className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-slate-400 font-bold uppercase">الوقت والجلسة</span>
                              <span className="text-sm font-bold">{exam.time} ({exam.session})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
              >
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">عذراً، لم نجد نتائج</h3>
                <p className="text-slate-500">حاول البحث بكلمة أخرى أو تأكد من رقم المساق</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-6 text-brand font-bold hover:underline"
                >
                  إعادة تعيين البحث
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-400 text-sm flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span>صُمم بكل ذكاء لطلابنا في الكلية الذكية الجامعية</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a href="#" className="flex items-center gap-1 hover:text-brand transition-colors font-medium">
            بوابة الطالب <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p>© 2026 الكلية الذكية الجامعية - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
