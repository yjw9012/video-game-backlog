const TO_DO = "TO_DO";
const IN_PROGRESS = "IN_PROGRESS";
const DONE = "DONE";

export const BACKLOG_COLUMN_TYPE = Object.freeze({ TO_DO, IN_PROGRESS, DONE });
export const BACKLOG_COLUMN_TYPES = Object.freeze([ TO_DO, IN_PROGRESS, DONE ]);

export const BACKLOG_COLUMN_TYPE_TO_DISPLAY_LABEL = Object.freeze({ [TO_DO]: "To Do", [IN_PROGRESS]: "In Progress", [DONE]: "Done" });

const TO_DO_DB_KEY = `0_${TO_DO}`;
const IN_PROGRESS_DB_KEY = `1_${IN_PROGRESS}`;
const DONE_DB_KEY = `2_${DONE}`;

export const BACKLOG_COLUMN_TYPE_DB_KEY_MAP = Object.freeze({
    [BACKLOG_COLUMN_TYPE.TO_DO]: [TO_DO_DB_KEY], [TO_DO_DB_KEY]: [BACKLOG_COLUMN_TYPE.TO_DO],
    [BACKLOG_COLUMN_TYPE.IN_PROGRESS]: [IN_PROGRESS_DB_KEY], [IN_PROGRESS_DB_KEY]: [BACKLOG_COLUMN_TYPE.IN_PROGRESS],
    [BACKLOG_COLUMN_TYPE.DONE]: [DONE_DB_KEY], [DONE_DB_KEY]: [BACKLOG_COLUMN_TYPE.DONE],
});

const PLACEHOLDER_ITEMS_NUM = 5;
export const PLACEHOLDER_ITEMS = Array(PLACEHOLDER_ITEMS_NUM).fill({ isPlaceholder: true }).map(({isPlaceholder}) => ({ id: `${Math.random()}`, isPlaceholder }));

export const PLATFORM_ID_TO_IMAGE_NAME = Object.freeze({ 6: "windows", 34: "android", 14: "apple", 39: "apple" });

export const PRODUCT_FAMILY_ID_TO_IMAGE_NAME = Object.freeze({ 1: "playstation", 2: "xbox", 4: "linux", 5: "nintendo switch" });

export const PLATFORM_IMAGE_NAME_TO_COLOR = Object.freeze({
    "windows": "blue", "android": "green", "apple": null, "playstation": "black", "xbox": "green", "linux": "black", "nintendo switch": "red"
});