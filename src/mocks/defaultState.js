export default {
  boards: [
    {
      title: "East Tab",
      items: {
        todo: [
          {
            title: "East Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
          {
            title: "East Task 2",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
        ],
        doing: [
          {
            title: "East Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: false,
              },
            ],
          },
        ],
        done: [
          {
            title: "East Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: true,
              },
            ],
          },
        ],
      },
    },
    {
      title: "West Tab",
      items: {
        todo: [
          {
            title: "West Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
        ],
        doing: [
          {
            title: "West Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: false,
              },
            ],
          },
        ],
        done: [
          {
            title: "West Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: true,
              },
            ],
          },
        ],
      },
    },
    {
      title: "North Tab",
      items: {
        todo: [
          {
            title: "North Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
        ],
        doing: [
          {
            title: "North Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: false,
              },
            ],
          },
        ],
        done: [
          {
            title: "North Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: true,
              },
            ],
          },
        ],
      },
    },
    {
      title: "South Tab",
      items: {
        todo: [
          {
            title: "South Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
        ],
        doing: [
          {
            title: "South Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: false,
              },
            ],
          },
        ],
        done: [
          {
            title: "South Task 1",
            description: "Dummy description",
            subtasks: [
              {
                title: "Task 1",
                completed: true,
              },
              {
                title: "Task 2",
                completed: true,
              },
            ],
          },
        ],
      },
    },
  ],
  selectedBoard: 0,
  selectedTask: -1,
  selectedColumn: null,
};
