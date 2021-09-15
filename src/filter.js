import "./App.css";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import GlobalFilter from "./GlobalFilter";

function Filter() {
  const data = [
    {
      name: "Ardenia Lattie",
      class: "CS",
      gender: "F",
      marks: "60",
    },
    {
      name: "Jamaal Emmet",
      class: "CS",
      gender: "M",
      marks: "42",
    },
    {
      name: "Delphine Ramberg",
      class: "IT",
      gender: "F",
      marks: "49",
    },
    {
      name: "Yurik Trunchion",
      class: "EEE",
      gender: "M",
      marks: "55",
    },
    {
      name: "Elwira McMullen",
      class: "EEE",
      gender: "F",
      marks: "32",
    },
    {
      name: "Nola Mordaunt",
      class: "ECE",
      gender: "F",
      marks: "49",
    },
    {
      name: "Urbanus Billin",
      class: "CE",
      gender: "M",
      marks: "71",
    },
    {
      name: "Shaine Gawthorp",
      class: "CS",
      gender: "M",
      marks: "76",
    },
    {
      name: "Norina Thorne",
      class: "CS",
      gender: "F",
      marks: "43",
    },
    {
      name: "Liliane Laing",
      class: "CE",
      gender: "F",
      marks: "57",
    },
    {
      name: "Decca Pablo",
      class: "Human Resources",
      gender: "M",
      marks: "13",
    },
    {
      name: "Husain Cundy",
      class: "Sales",
      gender: "M",
      marks: "52",
    },
    {
      name: "Deva Rehor",
      class: "CS",
      gender: "F",
      marks: "44",
    },
    {
      name: "Fianna Kuhwald",
      class: "ECE",
      gender: "F",
      marks: "74",
    },
    {
      name: "Janetta Oxer",
      class: "Research and Development",
      gender: "F",
      marks: "74",
    },
    {
      name: "Guillaume Gildersleaves",
      class: "Legal",
      gender: "M",
      marks: "66",
    },
    {
      name: "Dana Ziemen",
      class: "Support",
      gender: "M",
      marks: "61",
    },
    {
      name: "Cordula Hedden",
      class: "Human Resources",
      gender: "F",
      marks: "05",
    },
    {
      name: "Bay Moodie",
      class: "CE",
      gender: "M",
      marks: "48",
    },
    {
      name: "Buddie Verralls",
      class: "CS",
      gender: "M",
      marks: "80",
    },
    {
      name: "Jordon Benion",
      class: "Legal",
      gender: "M",
      marks: "04",
    },
    {
      name: "Alfreda Ruddock",
      class: "EEE",
      gender: "F",
      marks: "67",
    },
    {
      name: "Sanders Winsor",
      class: "CS",
      gender: "M",
      marks: "52",
    },
    {
      name: "Rowen Lovel",
      class: "Human Resources",
      gender: "M",
      marks: "12",
    },
    {
      name: "Kelsy Studders",
      class: "Research and Development",
      gender: "F",
      marks: "27",
    },
    {
      name: "Danit Lapworth",
      class: "EEE",
      gender: "F",
      marks: "54",
    },
    {
      name: "Celestyn Benning",
      class: "ECE",
      gender: "F",
      marks: "56",
    },
    {
      name: "Hope Strangeway",
      class: "Research and Development",
      gender: "F",
      marks: "27",
    },
    {
      name: "Sheelah Northover",
      class: "IT",
      gender: "F",
      marks: "70",
    },
    {
      name: "Kalina Beddis",
      class: "IT",
      gender: "F",
      marks: "79",
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Footer: "Name",
      Filter: GlobalFilter,
    },
    {
      Header: "Class",
      Footer: "Class",
      accessor: "class",
      Filter: GlobalFilter,
    },
    {
      Header: "Gender",
      Footer: "Gender",
      accessor: "gender",
      Filter: GlobalFilter,
    },
    {
      Header: "Marks",
      Footer: "Marks",
      accessor: "marks",
      Filter: GlobalFilter,
    },
  ];

  // const data = [
  //   {
  //     name: "Ayaan",
  //     class: "26",
  //     gender: "Male",
  //     marks: "89",
  //     key: 1,
  //   },
  //   {
  //     name: "Ahana",
  //     class: "22",
  //     gender: "Male",
  //     marks: "89",
  //     key: 2,
  //   },
  //   {
  //     name: "Peter",
  //     class: "40",
  //     gender: "Male",
  //     marks: "89",
  //     key: 3,
  //   },
  //   {
  //     name: "Virat",
  //     class: "30",
  //     gender: "Male",
  //     marks: "89",
  //     key: 4,
  //   },
  //   {
  //     name: "Rohit",
  //     class: "32",
  //     gender: "Male",
  //     marks: "89",
  //     key: 5,
  //   },
  //   {
  //     name: "Dhoni",
  //     class: "37",
  //     gender: "Male",
  //     marks: "89",
  //     key: 6,
  //   },
  // ];
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     width: 100,
  //   },
  //   {
  //     title: "Class",
  //     dataIndex: "class",
  //     key: "class",
  //     width: 100,
  //   },
  //   {
  //     title: "Gender",
  //     dataIndex: "gender",
  //     key: "gender",
  //     width: 100,
  //   },
  //   {
  //     title: "Marks",
  //     dataIndex: "marks",
  //     key: "marks",
  //     width: 100,
  //   },
  // ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <th {...column.getFooterProps}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}

export default Filter;
