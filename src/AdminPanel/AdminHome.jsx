const AdminHome = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div>
        <div className="bg-orange-100 min-h-screen">
          <div className=" bg-white text-blue-800 px-10 py-1 z-10 w-full">
            <div className="flex items-center justify-between py-2 text-5x1">
              <div className="font-bold text-blue-900 text-xl">
                Admin<span className="text-orange-600">Panel</span>
              </div>
              <div className="flex items-center text-gray-500">
                <span className="material-icons-outlined p-2">search</span>
                <span className="material-icons-outlined p-2">
                  notifications
                </span>
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-24 px-10 pb-4">
            <div className="w-2/12 mr-6">
              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    dashboard
                  </span>
                  Home
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    tune
                  </span>
                  Some menu item
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    file_copy
                  </span>
                  Another menu item
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    face
                  </span>
                  Profile
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    settings
                  </span>
                  Settings
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href=""
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    power_settings_new
                  </span>
                  Log out
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
              </div>
            </div>

            <div className="w-10/12">
              <div className="flex flex-row">
                <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6">
                  <p className="text-5xl text-indigo-900">Welcome </p>
                  <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                    <strong>01:51</strong>
                  </span>
                </div>

                <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6">
                  <p className="text-5xl text-indigo-900">Inbox</p>
                  <a
                    href=""
                    className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                  >
                    <strong>See messages</strong>
                  </a>
                </div>
              </div>
              <div className="flex flex-row h-64 mt-6">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                  a
                </div>
                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                  b
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                  c
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
