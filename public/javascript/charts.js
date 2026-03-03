
//   نشاط منصة أهل الأثر التعليمية :


var platformActivityOptions = {
  series: [
    { name: 'مستخدمون نشطون', data: [120, 160, 140, 210, 260, 240, 300] },
    { name: 'دروس مكتملة', data: [60, 80, 75, 110, 140, 130, 170] }
  ],

  colors: ['#4DA3FF', '#D6B15E'],

  chart: {
    type: 'area',
    height: 320,
    toolbar: { show: false },
    background: 'transparent',

     fontFamily: 'Almarai, system-ui, sans-serif',
  },

  stroke: {
    curve: 'smooth',
    width: 2
  },

  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.45,
      opacityTo: 0.08
    }
  },

  grid: { borderColor: '#22304A' },

  xaxis: {
    categories: ['أسبوع1','أسبوع2','أسبوع3','أسبوع4','أسبوع5','أسبوع6','أسبوع7'],
    labels: { style: { colors: '#EAF0FF' } },
    axisBorder: { color: '#22304A' },
    axisTicks: { color: '#22304A' }
  },

  yaxis: {
    labels: { style: { colors: '#EAF0FF' } }
  },

  legend: {
    position: 'top',
    labels: { colors: '#EAF0FF' }
  },

  tooltip: { theme: 'dark' }
};

new ApexCharts(document.querySelector("#platformActivityChart"), platformActivityOptions).render();


// مخطط أداء المعلمين

var teachersPerformanceOptions = {
  series: [{
    name: 'تقييم الأداء',
    data: [85, 78, 92, 70, 88]
  }],

  colors: ['#D6B15E'], // ذهبي

  chart: {
    type: 'bar',
    height: 340,
    toolbar: { show: false },
    background: 'transparent',
      fontFamily: 'Almarai, system-ui, sans-serif',
  },

  plotOptions: {
    bar: {
      horizontal: true, // أفقي
      barHeight: '55%',
      borderRadius: 6
    }
  },

  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%';
    },
    style: {
      colors: ['#0B1220'], // داكن داخل العمود
      fontWeight: 'bold'
      
    }
  },

  grid: {
    borderColor: '#22304A'
  },

  xaxis: {
    max: 100,
    categories: [
      'جودة الشرح',
      'إدارة الحصة',
      'متابعة الحفظ',
      'تنويع الأساليب',
      'رفع مستوى الطلاب'
    ],
    labels: {
      style: { colors: '#EAF0FF' }
    }
  },

  yaxis: {
    labels: {
      style: { colors: '#EAF0FF' }
    }
  },

  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val) => val + '%'
    }
  },

  legend: {
    show: false
  }
};

new ApexCharts(
  document.querySelector("#teachersPerformanceChart"),
  teachersPerformanceOptions
).render();



// مخطط حالة الدورات


var platformPipelineOptions = {
  series: [{
    name: 'عدد الطلاب',
    data: [800, 410, 290, 100]  // تسجيل، بدأ، مستمر، اكتمل
  }],

  colors: ['#4DA3FF'], // أزرق مناسب للكحلي

  chart: {
    type: 'bar',
    height: 340,
    toolbar: { show: false },
    background: 'transparent',
    fontFamily: 'Almarai, system-ui, sans-serif'
  },

  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,      // يعطي كل مرحلة لون (من نفس الباليت)
      barHeight: '60%',
      borderRadius: 8
    }
  },

  // 🔥 باليت ألوان مناسبة للخلفية الكحلي
  colors: ['#4DA3FF', '#D6B15E', '#81C784', '#F1C40F'],

  dataLabels: {
    enabled: true,
    formatter: function (val) { return val + ' طالب'; },
    style: {
      fontFamily: 'Almarai',
      colors: ['#0B1220'], // داخل البار
      fontWeight: 700
    }
  },

  grid: { borderColor: '#22304A' },

  xaxis: {
    labels: {
      style: {
        fontFamily: 'Almarai',
        colors: '#EAF0FF'
      }
    },
    title: {
      text: 'عدد الطلاب',
      style: { fontFamily: 'Almarai', color: '#EAF0FF' }
    }
  },

  yaxis: {
    labels: {
      style: {
        fontFamily: 'Almarai',
        colors: '#EAF0FF'
      }
    }
  },

  labels: ['تسجيل جديد', 'بدأ التعلّم', 'مستمر', 'اكتمل'],

  tooltip: {
    theme: 'dark',
    style: { fontFamily: 'Almarai' }
  },

  legend: { show: false }
};

new ApexCharts(
  document.querySelector("#platformPipeline"),
  platformPipelineOptions
).render();


// توزيع الطلاب حسب المستوى





var studentsLevelOptions = {
  series: [190, 200, 410], // مبتدئ، متوسط، متقدم
  labels: ['مبتدئ', 'متوسط', 'متقدم'],

  // 🎨 ألوان مناسبة للكحلي
  colors: ['#4DA3FF', '#D6B15E', '#81C784'],

  chart: {
    type: 'donut',
    height: 340,
    toolbar: { show: false },
    background: 'transparent',
    fontFamily: 'Almarai, system-ui, sans-serif'
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          name: {
            show: true,
            color: '#A9B6D3',
            fontFamily: 'Almarai'
          },
          value: {
            show: true,
            color: '#EAF0FF',
            fontFamily: 'Almarai',
            fontSize: '22px',
            fontWeight: 700,
            formatter: function (val) {
              return val + ' طالب';
            }
          },
          total: {
            show: true,
            label: 'الإجمالي',
            color: '#EAF0FF',
            fontFamily: 'Almarai',
            formatter: function (w) {
              var sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              return sum + ' طالب';
            }
          }
        }
      }
    }
  },

  dataLabels: {
    enabled: true,
    style: {
      fontFamily: 'Almarai',
      colors: ['#0B1220'],
      fontWeight: 700
    },
    formatter: function (val) {
      return Math.round(val) + '%';
    }
  },

  stroke: {
    width: 2,
    colors: ['#0B1220'] // يفصل الشرائح بشكل أنيق على الكحلي
  },

  legend: {
    position: 'bottom',
    fontFamily: 'Almarai',
    labels: { colors: '#EAF0FF' }
  },

  tooltip: {
    theme: 'dark',
    style: { fontFamily: 'Almarai' },
    y: {
      formatter: function (val) {
        return val + ' طالب';
      }
    }
  }
};

new ApexCharts(
  document.querySelector("#studentsLevelChart"),
  studentsLevelOptions
).render();
