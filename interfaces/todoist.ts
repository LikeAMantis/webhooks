interface WebhookEventBase {
  event_name: 'item:added' | 'item:updated' | 'item:removed' | 'item:completed' | 'item:uncompleted',
  user_id: string,
  initiator: {
    email: string,
    full_name: string,
    id: string,
    image_id: string,
    is_premium: boolean,
  },
  event_data: TodoistItem,
}

export interface WebhookEventAdd extends WebhookEventBase {
  event_name: 'item:added'
}

export interface WebhookEventExtra extends WebhookEventBase {
  event_name: 'item:updated' | 'item:removed' | 'item:completed' | 'item:uncompleted',
  event_data_extra: { old_item: TodoistItem }
}

export interface TodoistItem {
  creatorId: string,
  createdAt: string,
  assigneeId: string,
  assignerId: string,
  commentCount: number,
  isCompleted: boolean,
  content: string,
  description: string,
  due: {
    date: string,
    isRecurring: boolean,
    datetime: string,
    string: string,
    timezone: string
  },
  duration: {
    amount: number,
    unit: string
  },
  id: string,
  labels: string[], // label name not id
  order: number,
  priority: number,
  projectId: string,
  sectionId: string,
  parentId: string,
  url: string
}


export interface Project {
  id: string,
  color: string,
  name: string,
  parentId: null,
  order: number,
  commentCount: number,
  isShared: boolean,
  isFavorite: boolean,
  isInboxProject: boolean,
  isTeamInbox: boolean,
  url: string,
  viewStyle: string
}

export interface Section {
  id: string,
  projectId: string,
  order: number,
  name: string
}

export interface Label {
  id: string,
  name: string,
  color: string,
  order: number,
  isFavorite: boolean
}

// expand filters here
export type Filter = Project | Section | Label
export enum FILTER_TYPE {
  PROJECT = 'project',
  SECTION = 'section',
  LABEL = 'label',
}

