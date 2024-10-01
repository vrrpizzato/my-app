import UserList from '../../components/UserList';
import Link from 'next/link';

const UserListPage: React.FC = () => {
  return (    
    <div className="p-4">
      <div className="grid grid-cols-1 place-content-center">
        <div className="grid grid-cols-2 w-screen flex-wrap place-items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <h1 className="p-4 font-poppins text-3xl text-yellow-400 font-bold mb-4">User List</h1>
            </div>
          <div className="p-2 hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link href="/users/new" className="hover:underline">
                <button type="button" className="text-white font-bold bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                    Create New
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 w-screen flex-wrap place-items-center justify-between mx-auto p-4">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
