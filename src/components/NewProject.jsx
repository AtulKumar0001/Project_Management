import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ addProject, closeInputs }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    const project = {
      title,
      description,
      dueDate,
    };

    addProject(project);
  }

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={closeInputs}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" isTextArea={false} ref={titleRef} />
        <Input label="Description" isTextArea={true} ref={descriptionRef} />
        <Input
          label="Due Date"
          type="date"
          isTextArea={false}
          ref={dueDateRef}
        />
      </div>
    </div>
  );
}
