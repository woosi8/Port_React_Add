const AuthorityData = [
  {
    id: 'Workspace',
    label: '워크스페이스',
    // type: 'main',
    children: [
      {
        id: 'Workspace.Create',
        value: 'Workspace.Create',
        label: 'Create'
        // type: 'sub',
      },
      {
        id: 'Workspace.Read',
        label: 'Read'
      },
      {
        id: 'Workspace.Update',
        label: 'Update'
      },
      {
        id: 'Workspace.Delete',
        label: 'Delete'
      }
    ]
  },
  {
    id: 'Project',
    label: '프로젝트',
    // type: 'main',
    children: [
      {
        id: 'Project.Create',
        label: 'Create'
        // type: 'sub',
      },
      {
        id: 'Project.Read',
        label: 'Read'
      },
      {
        id: 'Project.Update',
        label: 'Update'
      },
      {
        id: 'Project.Delete',
        label: 'Delete'
      }
    ]
  },
  {
    id: 'Tasks',
    label: '테스크',
    // type: 'main',
    children: [
      {
        id: 'Tasks.Create',
        label: 'Create'
        // type: 'sub',
      },
      {
        id: 'Tasks.Read',
        label: 'Read'
      },
      {
        id: 'Tasks.Update',
        label: 'Update'
      },
      {
        id: 'Tasks.Delete',
        label: 'Delete'
      }
    ]
  },
  {
    id: 'WorkField',
    label: '워크필드',
    // type: 'main',
    children: [
      {
        id: 'WorkField.Create',
        label: 'Create'
        // type: 'sub',
      },
      {
        id: 'WorkField.Read',
        label: 'Read'
      },
      {
        id: 'WorkField.Update',
        label: 'Update'
      },
      {
        id: 'WorkField.Delete',
        label: 'Delete'
      }
    ]
  }
];

export default AuthorityData;
