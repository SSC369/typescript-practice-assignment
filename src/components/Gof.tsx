import { GofFieldType } from "../types";
import Field from "./Field";

const Gof: React.FC<{ field: GofFieldType }> = ({ field }) => {
  return (
    <li className="text-sm flex flex-col gap-2 w-1/3  border-r-[1px] last:border-0 pr-6">
      <p className="text-slate-600 text-xs">{field.name}</p>
      <Field fieldType={field.fieldType} value={field.value} />
    </li>
  );
};

export default Gof;
