export default function Header() {
    return (
        <header className='flex justify between'>
        <a href='' className='flex items-center gap-1'>
          <svg>
            <path></path>
          </svg>
          <span className='font-bold text-xl'>Accommo Date</span>
        </a>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div>Anywhere</div>
          <div className='border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-2 rounded-full'>
            <svg></svg>
            <path></path>
          </button>
        </div>
        <Link to={'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 '>
          <svg>
            <path></path>
          </svg>
        <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
          <svg>
            <path></path>
          </svg>
        </div>
        </Link>
      </header>
    )
}