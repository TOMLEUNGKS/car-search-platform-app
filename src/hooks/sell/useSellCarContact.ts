import { ref, watch, computed, reactive } from "vue";

import { IContact } from "@/model/Cars";

// let _searchFilter: SearchFilter = new CarSearchFilter();
const _carSellContact = reactive<IContact>({
  lastname: null,
  firstname: null,
  email: null,
  phoneNumber: null,
  secPhoneNUmber: null,
});
//===========category=======================
//Setter

function setCarSellContactValue(category, value: string | FileList) {
  _carSellContact[category] = value;
}

function resetCarSellContactValue(category) {
  _carSellContact[category] = null;
}

function resetCarSellContactsValue() {
  for (const key in _carSellContact) {
    resetCarSellContactValue(key);
  }
}

function getCarSellContactValue(category) {
  return _carSellContact[category];
}

function isNullCarSellContactByCate(category) {
  return _carSellContact[category] == null;
}


function isNullCarSellContacts(cateList) {
  for (const cate in cateList) {
    if (isNullCarSellContactByCate(cate)) {
      return true;
    }
  }
  return false;
}

const contactDataAreValid = reactive({
  invalidity: true
})

function contactDataInvalidity(value) {
  contactDataAreValid.invalidity = value;
  return contactDataAreValid.invalidity
}

function returnContactInvalidity(){
  return contactDataAreValid.invalidity
}

function findValueFromCate(category, value) {
  return _carSellContact[category] == value;
}

export default function useSellCarContact() {
  return {
    _carSellContact,
    setCarSellContactValue,
    getCarSellContactValue,
    resetCarSellContactValue,
    resetCarSellContactsValue,
    isNullCarSellContactByCate,
    isNullCarSellContacts,
    findValueFromCate,
    contactDataAreValid,
    contactDataInvalidity,
    returnContactInvalidity
  };
}
