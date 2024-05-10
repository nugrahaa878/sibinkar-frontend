import { OrgNode } from "../../types";

export const dummyData: OrgNode = {
  name: "ari",
  title: "CEO",
  id: 1,
  children: [
    {
      name: "budi",
      title: "Manager 1",
      id: 2,
      offset: 1,
      children: [
        {
          name: "hengki",
          title: "Lead 1",
          id: 4,
          children: [
            {
              name: "Indri",
              title: "Engineer 1",
              id: 6,
              children: [
                {
                  name: "jujo",
                  title: "Intern 1",
                  id: 7,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Ucok",
          title: "Lead 2",
          id: 5,
          children: [],
        },
        {
          name: "heru",
          title: "Manager 2",
          id: 3,
          children: [
            {
              name: "hengki",
              title: "Lead 1",
              id: 4,
              offset: 1,
              children: [
                {
                  name: "Indri",
                  title: "Engineer 1",
                  id: 6,
                  children: [
                    {
                      name: "jujo",
                      title: "Intern 1",
                      id: 7,
                      children: [],
                    },
                    {
                      name: "jujJejio",
                      title: "Intern 2",
                      id: 7,
                      children: [],
                    },
                  ],
                },
              ],
              childOffset: [
                {
                  name: "irawan",
                  title: "Co-lead 1",
                  id: 8,
                  children: [],
                },
                {
                  name: "setiaji",
                  title: "Co-lead 2",
                  id: 8,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Engki",
          title: "Manager 3",
          id: 8,
          children: [],
        },
      ],
    },
  ],
};
