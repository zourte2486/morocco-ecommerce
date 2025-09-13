import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-accent-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-medium rounded-full mb-6">
              <Star className="w-4 h-4 ml-2" />
              منتجات طبيعية 100%
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              <span className="text-primary">عسل</span> ومنتجات طبيعية
              <br />
              <span className="arabic-text">مغربية أصيلة</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              اكتشف أجود أنواع العسل وزيت الأركان والأعشاب الطبية من قلب المغرب. 
              منتجات طبيعية 100% لجمالك وصحتك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 transform hover:scale-105 shadow-honey"
              >
                تسوق الآن
                <ArrowLeft className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                تعرف علينا
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-text-secondary">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">منتج طبيعي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">طبيعي</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center shadow-honey-lg">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">🍯</div>
                  <div className="text-2xl font-bold text-primary-800">عسل طبيعي خالص</div>
                  <div className="text-primary-600">من جبال الأطلس</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-200 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-300 rounded-full opacity-60 animate-honey-drip"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary-200 rounded-full opacity-40 animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary-100 rounded-full opacity-20 animate-honey-drip"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-200 rounded-full opacity-30 animate-float"></div>
      </div>
    </section>
  );
}
