import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Select, { Input as Element } from "components/util/select";
import useFetchDepartments from "./useFetchDepartments";
import { useDepartmentQueryState } from "components/careers/search-bar/store";

import { useResetSearch } from "components/careers/store";

function SelectADepartment(props: Styleable) {
  const { data, error } = useFetchDepartments();
  const reset = useResetSearch();
  const [department, setDepartment] = useDepartmentQueryState();

  const selectDepartment = (input: string) => {
    reset(["query"]);
    setDepartment(input);
  };

  if (error) {
    return <div>Error fetching departments...</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Input
        value={department ?? ""}
        defaultValue={department ?? ""}
        onChange={(e: any) => selectDepartment(e.target.value)}
      >
        <option value="all departments">All departments</option>
        {data.map((department) => (
          <option key={department} value={department}>{department}</option>
        ))}
      </Input>
    </>
  );
}

const Input = styled(Select)`
  ${Element} {
    width: 258px;

    @media only screen and (max-width: 425px) {
      width: 200px;
    } 
  }
`;

export default SelectADepartment;
