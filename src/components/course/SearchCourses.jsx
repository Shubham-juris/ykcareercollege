export default function SearchCourses({ results = 8 }) {
  return (
    <div className=" max-w-[1240px] flex flex-row items-center justify-between mx-auto mt-10 mb-10">
      <p>Showing 1 - 6 of {results} Results</p>
      <div className="flex  rounded-sm p-1">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Courses..."
          style={{
            backgroundColor: "#f3f0ff",
            padding: "1rem",
            width: "300px",
            // borderRadius: "5px",
            fontSize: "16px",
            // marginRight: "10px",
            marginBottom: "0px",
          }}
        />
        <button
          type="button"
          style={{
            backgroundColor: "#127274",
            border: "none",
            padding: "10px 15px",
            // borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fff"
              d="M214,305.8c-0.7-2-1.5-4-2.4-5.9c-1.9-4.2-4-8.4-6.3-12.4c-2.1-3.6-3.8-5.7-7-8.3c-4.2-3.4-9.8-8.5-15.7-8.1c-0.3,0.7-0.9,1.3-1.7,1.8c-29.4,18.5-59,38.5-83.4,63.5c-7.5,7.7-14.7,16.5-20.2,26.2c9.3-2,19.7-0.7,28.6,1.4c5.8,1.4,11.7,3,16.9,5.8c3.4,1.8,5.5,5,7.5,8.2c2.5,4.2,15.6,27.4,17.3,41c9-7.5,16.8-16.6,23.6-25.9c17.8-24.5,29.9-52.9,39-81.7c0.7-2.1,2.1-3,3.7-3.1c0.1-0.4,0.3-0.8,0.5-1.1C214.2,306.6,214.1,306.3,214,305.8z"
            ></path>
            <path
              fill="#74CCCF"
              d="M431.2,184.2c-1.4-23.9-13-47.9-26.1-67.5c-13.7-20.5-31.4-39.8-53.4-51.5c-44.2-23.5-101.4-9.4-136.8,23.9c-18.9,17.8-32.4,41-31.2,67.6c1.2,25.8,13.1,49.2,28.4,69.5c0.6,0.8,0.9,1.6,1,2.4c8.3,6,16.2,12,25.5,16.7c9.9,5,20.2,9.2,30.7,12.8c21.8,7.7,45.6,15.4,69.1,14.6C382.8,271.2,434.1,232.5,431.2,184.2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
