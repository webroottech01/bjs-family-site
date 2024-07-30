export type AlterMode = "add" | "edit";

type SelectedItem = {
  mode: AlterMode;
  index: number;
};

export default SelectedItem;
