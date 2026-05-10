/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Exam {
  date: string;
  day: string;
  session: string;
  time: string;
  courseCode: string;
  courseName: string;
}

export const EXAM_DATA: Exam[] = [
  // Page 1
  { date: "14/05/2026", day: "الخميس", session: "الأولى", time: "09:30 - 11:30", courseCode: "100204", courseName: "أخلاقيات المهنة والسلامة العامة والمهنية" },
  { date: "16/05/2026", day: "السبت", session: "الأولى", time: "09:30 - 11:30", courseCode: "100200", courseName: "دراسات في الفكر العربي والاسلامي" },
  { date: "16/05/2026", day: "السبت", session: "الأولى", time: "09:30 - 11:30", courseCode: "510104", courseName: "القضية الفلسطينية" },
  { date: "16/05/2026", day: "السبت", session: "الثانية", time: "12:00 - 14:00", courseCode: "145210", courseName: "قانون البينات" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "141108", courseName: "اساسيات التشفير" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "141201", courseName: "نظم الاتصالات" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "143102", courseName: "سلوك المستهلك عبر الانترنت" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "143207", courseName: "ادارة الموارد البشرية" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "131225", courseName: "كفاءة وترشيد استهلاك الطاقة" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "111104", courseName: "تقنيات حديثة في علم الجلد التجميلي1" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "110120", courseName: "كيماويات الشعر 1" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "124100", courseName: "مقدمة في المهن الهندسية" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "421106", courseName: "تاريخ الرسوم المتحركة و تصميم الشخصيات" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "137104", courseName: "أساسيات الإدارة المالية" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "137212", courseName: "التحليل المالي باستخدام الحاسوب" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "138102", courseName: "الفيلم الوثائقي" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "144100", courseName: "فن الكتابة والتعبير في اللغة الانجليزية" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "171212", courseName: "صحة نفسية نظري" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "145108", courseName: "مناهج البحث العلمي" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "131111", courseName: "مختبر التمديدات الكهربائية" },
  { date: "17/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "134208", courseName: "مقدمة في الوسائط المتعددة" },

  // Page 2
  { date: "17/05/2026", day: "الأحد", session: "بلا جلسة (محددة)", time: "12:00 - 14:00", courseCode: "134106", courseName: "تاريخ الفن" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "138210", courseName: "انتاج البرامج التلفزيونية و الاذاعية" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "171213", courseName: "تمريض جراحة وباطني 1 نظري" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "172209", courseName: "علم الحركة (الميكانيكا الحيوية)" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "420206", courseName: "محاسبة متوسطة (2)" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "410102", courseName: "مبادئ الاقتصاد الجزئي" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "421319", courseName: "التصميم الرقمي" },
  { date: "17/05/2026", day: "الأحد", session: "الثانية", time: "12:00 - 14:00", courseCode: "143204", courseName: "الاتصال التسويقي المتكامل" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "145215", courseName: "دراسات قانونية مختارة" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "131107", courseName: "مشغل الطاقة الشمسية" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "172100", courseName: "احياء دقيقة" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "171100", courseName: "أحياء دقيقة" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "111205", courseName: "برتوكلات علاج البشرة 1" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "110213", courseName: "تقنيات المكياج" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "120104", courseName: "خدمة الطعام والشراب 2" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "124209", courseName: "المخططات التنفيذية للديكور" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "138208", courseName: "اللغة الانجليزية للسينما و التفزيون" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "138110", courseName: "مونتاج متقدم" },
  { date: "18/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "120106", courseName: "انتاج طعام 2" },

  // Page 3
  { date: "18/05/2026", day: "الاثنين", session: "الثانية", time: "12:00 - 14:00", courseCode: "100102", courseName: "مهارات حياتية" },
  { date: "18/05/2026", day: "الاثنين", session: "الثانية", time: "12:00 - 14:00", courseCode: "145110", courseName: "القانون الدستوري" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "110101", courseName: "العناية باليدين والقدمين1" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "143100", courseName: "التجارة الالكترونية" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "131104", courseName: "مختبر الكترونيات 1" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "110222", courseName: "تصفيف الشعر وتسريحه" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "124212", courseName: "تكييف وتمديدات صحية" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "134102", courseName: "تصميم بالحاسوب 2" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "145209", courseName: "القانون الاداري" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "113102", courseName: "تصميم وتسويق مجموعة أزياء من الإيحاء" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "144102", courseName: "الترجمة والتدقيق اللغوي 1" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "420201", courseName: "محاسبة المنشآت المالية" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "138202", courseName: "إعداد البرامج وصناعة المحتوى" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "420102", courseName: "مبادئ المحاسبة(2)" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "137102", courseName: "مبادئ المحاسبة -2-" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "137210", courseName: "محاسبة شركات" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "421108", courseName: "التشريح الفني" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "171700", courseName: "الفيزياء الطبية" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "143114", courseName: "نظم المعلومات التسويقية" },
  { date: "19/05/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "138206", courseName: "تصوير الفيديو وفن الاضاءة" },

  // Page 4 & 5 Highlights
  { date: "20/05/2026", day: "الأربعاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "138204", courseName: "التصميم الجرافيكي ومعالجة الصور" },
  { date: "20/05/2026", day: "الأربعاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "145106", courseName: "قانون العمل" },
  { date: "21/05/2026", day: "الخميس", session: "الأولى", time: "09:30 - 11:30", courseCode: "131227", courseName: "أنظمة تخزين الطاقة" },
  { date: "21/05/2026", day: "الخميس", session: "الثانية", time: "12:00 - 14:00", courseCode: "137214", courseName: "الذكاء الاصطناعي في العلوم المالية" },
  { date: "23/05/2026", day: "السبت", session: "الأولى", time: "09:30 - 11:30", courseCode: "510110", courseName: "أساسيات الحاسوب والبرمجة" },
  { date: "24/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "137207", courseName: "مبادئ الاحصاء" },
  { date: "25/05/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "137202", courseName: "تطبيقات محاسبية محوسبة - 2" },
  { date: "31/05/2026", day: "الأحد", session: "الأولى", time: "09:30 - 11:30", courseCode: "110114", courseName: "علم الجمال" },
  { date: "01/06/2026", day: "الاثنين", session: "الأولى", time: "09:30 - 11:30", courseCode: "113110", courseName: "تقنيات خياطة ملابس نسائية" },
  { date: "02/06/2026", day: "الثلاثاء", session: "الأولى", time: "09:30 - 11:30", courseCode: "120205", courseName: "محاسبة تكاليف الطعام والشراب" },
  { date: "04/06/2026", day: "الخميس", session: "الأولى", time: "09:30 - 11:30", courseCode: "171200", courseName: "كيمياء عامة" },
  { date: "04/06/2026", day: "الخميس", session: "الأولى", time: "09:30 - 11:30", courseCode: "137213", courseName: "أمن وحماية نظم المعلومات" },
];
