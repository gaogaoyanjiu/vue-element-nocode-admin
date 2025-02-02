const form = {
  state: {
    clickedIndex: -1,
    formAttribute: {},
    formItems: [],
    formItemToHandle: [],
    formItem: {},
    formItemAttribute: {},
    srcCode: ""
  },
  mutations: {
    SET_FORM_ATTRIBUTE(state, formAttribute) {
      state.formAttribute = { ...formAttribute };
    },
    SET_FORMITEMS(state, formItems) {
      state.formItems = JSON.parse(JSON.stringify(formItems));
    },
    SET_CLICKED_INDEX(state, clickedIndex) {
      state.clickedIndex = clickedIndex;
    },
    SET_FORMITEM_HANDLE(state, formItemToHandle) {
      state.formItemToHandle = { ...formItemToHandle };
    },
    SET_FORMITEM_OF_ITEMS(state, newFormItem) {
      const { idx, formItem } = newFormItem;
      state.formItems.splice(idx, 1, formItem);
    },
    SET_SRC_FORM_CODE(state, srcCode) {
      state.srcCode = srcCode;
    },
    DELETE_FORM_ITEM(state, clickedIndex) {
      console.log("TCL: DELETE_FORM_ITEM -> clickedIndex", clickedIndex);
      state.formItems.splice(clickedIndex, 1);
    }
  }
};

export default form;
