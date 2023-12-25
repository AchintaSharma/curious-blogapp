import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import PrimaryButton from "../../../components/common/buttons/PrimaryButton.tsx";
import useCategoryStore from "../../../store/categoryStore.ts";

const ManageCategories = () => {
  const {
    categories,
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryStore();
  // sort by date
  const sortCategories = [...categories].sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // see more visibility state and fucntions
  const [visibleRows, setVisibleRows] = useState(3);
  // see more function
  const showMoreRows = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 3);
  };

  // add new  category state
  const [newCategory, setNewCategory] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState<number | null>(null);

  // update category state
  // const [updatedCategory, setUpdatedCategory] = useState({
  //   id: 0,
  //   category: "",
  // });

  // add category
  // const handleAddCategory = () => {
  //   addCategory(newCategory);
  //   setNewCategory("");
  // };

  const handleAddCategory = () => {
    if (!editMode) {
      addCategory(newCategory);
      setNewCategory("");
    } else if (editCategoryId != null) {
      updateCategory(editCategoryId, newCategory);
      setEditMode(false);
      setEditCategoryId(null);
      setNewCategory("");
    }
  };
  // update category
  // const handleUpdateCategory = () => {
  //   updateCategory(updatedCategory.id, updatedCategory.category);
  //   setUpdatedCategory({ id: 0, category: "" });
  // };

  const handleEditCategory = (categoryId: number) => {
    const categoryToEdit = categories.find(
      (category) => category.id === categoryId
    );
    if (categoryToEdit) {
      setNewCategory(categoryToEdit.category);
      setEditMode(true);
      setEditCategoryId(categoryId);
    }
  };

  // delete category
  const handleDeleteCategory = (id: number) => {
    deleteCategory(id);
  };

  // to view all categories initially
  useEffect(() => {
    // Fetch initial categories when the component mounts
    getCategory();
  }, [getCategory]);

  return (
    <div className="max-w-screen-lg mx-auto my-2">
      <div className=" grid grid-flow-col gap-14">
        {/* Existing Category */}
        <div className=" col-span-6">
          <h2 className=" font-semibold text-xl mb-4">Existing Category</h2>

          {/* table */}
          <table className="w-fit bg-white border border-Zomp rounded-lg overflow-hidden shadow-md my-4">
            <thead className="bg-LightSilver text-left">
              <tr>
                <td>
                  <th className="py-4 px-4 flex items-center gap-2">
                    Name
                    <span className=" cursor-pointer">
                      <FaSort />
                    </span>
                  </th>
                </td>

                <td>
                  <th className="py-4 px-4 flex items-center gap-2">
                    Action{" "}
                    <span className=" cursor-pointer">
                      <FaSort />
                    </span>
                  </th>
                </td>
              </tr>
            </thead>

            <tbody>
              {sortCategories.slice(0, visibleRows).map((category) => (
                <tr className=" border-b border-Zomp" key={category.id}>
                  <td className="py-4 px-4">{category.category}</td>
                  <td className="py-2 px-4 ">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"

                        // onClick={() =>
                        //   setUpdatedCategory({
                        //     id: category.id,
                        //     category: category.category,
                        //   })
                        // }
                        onClick={() => handleEditCategory(category.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* See more */}
          {visibleRows < sortCategories.length && (
            <div className="flex justify-center">
              <button
                type="button"
                className=" text-Zomp px-2 py-1 rounded-lg"
                onClick={showMoreRows}
              >
                See more
              </button>
            </div>
          )}
        </div>

        {/* Add Category */}
        <div className=" col-span-6">
          <h2 className="font-semibold text-xl mb-4">
            {/* Add Category */}
            {editMode ? "Update Category" : "Add Category"}
          </h2>
          <div className="flex-shrink-0">
            <input
              type="text"
              placeholder={`Enter${editMode ? "Update" : "New"} category`}
              className=" border border-Zomp rounded-lg bg-transparent h-12 px-4 mb-4 w-full"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}

            />
          </div>
          <PrimaryButton onClick={handleAddCategory}>
            {" "}
            {/* Add category */}
            {editMode ? "Update Category" : "Add Category"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
