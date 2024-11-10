import Button from "./Button";

export default function Sidebar({ onclick, projectDetails, onSideClick }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onclick}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectDetails.map((data, index) => {
          return (
            <li key={data.id}>
              <button
                className="w-full text-left py-1 px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                onClick={() => onSideClick(data.id)}
              >
                {data.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
