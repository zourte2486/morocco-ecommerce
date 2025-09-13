'use client';

import { Bell, Search, User } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="البحث..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-sm">
              <div className="font-medium text-text-primary">Admin User</div>
              <div className="text-text-secondary">مدير</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
