import React from "react";
import MaterialTable from "material-table";

function Table() {
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
      class: "MBA",
      gender: "M",
      marks: "13",
    },
    {
      name: "Husain Cundy",
      class: "M.T",
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
      class: "ECE",
      gender: "F",
      marks: "74",
    },
    {
      name: "Guillaume Gildersleaves",
      class: "EEE",
      gender: "M",
      marks: "66",
    },
    {
      name: "Dana Ziemen",
      class: "IT",
      gender: "M",
      marks: "61",
    },
    {
      name: "Cordula Hedden",
      class: "MBA",
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
      class: "EEE",
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
      class: "MBA",
      gender: "M",
      marks: "12",
    },
    {
      name: "Kelsy Studders",
      class: "ECE",
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
      class: "ECE",
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
      title: "Name",
      field: "name",
    },
    {
      title: "Class",
      field: "class",
    },
    {
      title: "Gender",
      field: "gender",
    },
    {
      title: "Marks",
      field: "marks",
    },
  ];

  return (
    <MaterialTable
      data={data}
      columns={columns}
      options={{
        filtering: true,
        rowStyle: {
          backgroundColor: "#EEE",
        },
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        search: true,
      }}
    />
  );
}

export default Table;
