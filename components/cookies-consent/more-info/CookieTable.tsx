import React from "react";
import styled from "styled-components";
import { Column, useTable } from "react-table";

const Styles = styled.div`
  table {
    border-spacing: 0;
    text-align: left;

    thead {
      background: transparent
        linear-gradient(93deg, #758588 0%, #677578 21%, #30373a 100%) 0% 0%
        no-repeat padding-box;
    }

    tbody {
      min-width: 100%;
    }

    th {
      color: white;
    }

    td {
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #d9d9d9;
    }

    th:nth-child(1) {
      padding-left: 40px;
    }

    td:nth-child(1) {
      font-style: italic;
      padding-left: 40px;
      padding-right: 10px;
    }

    td:nth-child(2) {
      padding-left: 30px;
      padding-bottom: 20px;
      max-width: 470px;
    }

    td:nth-child(2),
    td:nth-child(3) {
      padding-right: 30px;
    }

    th:last-child,
    td:last-child {
      padding-right: 45px;
    }

    td {
      background: white;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem 0px;

      :last-child {
        border-right: 0;
      }
    }

    th:nth-child(1) {
      padding-right: 10px;
    }
    th:nth-child(3) {
      padding-right: 30px;
    }

    td {
      padding: 20px 0px;
    }

    @media only screen and (max-width: 680px) {
      padding: 0;
      width: 100%;
      background: white;
      overflow: scroll;

      td {
        //   border: 1px solid red;
      }

      td,
      th,
      tr {
        padding: 0 !important;
        font-size: 13px;
      }

      th {
        padding: 10px 0px !important;
      }

      td {
        padding: 10px !important;
      }

      th:nth-child(1),
      td:nth-child(1) {
        max-width: 100px !important;
        min-width: 100px;
        overflow: scroll;
      }

      th:nth-child(2) {
        max-width: 300px !important;
      }
      td:nth-child(2) {
        display: block;
        max-height: 300px;
        max-width: 150px !important;
        min-width: 150px;
        overflow: scroll;

        @media only screen and (max-width: 310px) {
          max-width: 80px !important;
          min-width: 80px;
        }
      }
    }
  }
`;

function Table() {
  const columns = React.useMemo<Column<Cookie>[]>(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
        width: 50,
      },
      {
        Header: "Duration",
        accessor: "duration",
      },
      {
        Header: "Datatype",
        accessor: "dataType",
      },
    ],
    []
  );

  const data = React.useMemo<Cookie[]>(
    () => [
      {
        name: "_ga",
        description: "Used to distinguish users.",
        duration: "2 years",
        dataType: "string",
      },
      {
        name: "_gid",
        description: "Used to distinguish users.",
        duration: "24 hours",
        dataType: "string",
      },
      {
        name: "_ga_<container-id>",
        description: "Used to persist session state.",
        duration: "2 years",
        dataType: "string",
      },
      {
        name: "_gac_gb_<container-id>",
        description:
          "Contains campaign related information. If you have linked your Google Analytics and Google Ads accounts, Google Ads website conversion tags will read this cookie unless you opt-out.",
        duration: "90 days",
        dataType: "string",
      },
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Cookie>({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface Cookie {
  name: string;
  description: string;
  duration: string;
  dataType: string;
}

function App() {
  return (
    <Styles>
      <Table />
    </Styles>
  );
}

export default App;
