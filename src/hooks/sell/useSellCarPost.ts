import { ref, watch, computed, reactive } from "vue";

import { ICarPost } from "@/model/Cars";
import useAuthUser from "@/hooks/user/useAuthUser";
import useBaseFetch from "@/hooks/useBaseFetch";
import useSellCarContact from "@/hooks/sell/useSellCarContact";

const { _carSellContact } = useSellCarContact();

const { getAuthUser } = useAuthUser();

// let _searchFilter: SearchFilter = new CarSearchFilter();
const _sellCarPost = reactive<ICarPost>({
  imgs: [],
  car_id: null,
  dealerID: null,
  "Listing Price": null,
  "Factory options": null,
  "Aftermarket options": null,
  Location: null,
  mileage: null,
  isRegister: true,
  "Expired Date": null,
  "VIN number": null,
  "Exterior Colour": null,
  "Manufactor Listed Colour": null,
  "Interior Colour": null,
  "Seller type": null,
  services: [],
  Comments: null,
  front_rim: null,
  rear_rim: null,
  front_tyre: null,
  rear_tyre: null,
  tyre_model: null,
  built_year: null,
  transmission: null,
});

// const _sellCarPostTest = reactive<ICarPost>({
//   imgs: [],
//   car_id: "C1",
//   dealerID: "admin",
//   "Listing Price": 6154,
//   "Factory options": "asdasd",
//   "Aftermarket options": "asdasd",
//   Location: "HKI",
//   mileage: 1515,
//   isRegister: true,
//   "Expired Date": "02/22",
//   "VIN number": "adsd1854",
//   "Exterior Colour": "Black",
//   "Manufactor Listed Colour": "Pink",
//   "Interior Colour": "Green",
//   "Seller type": null,
//   Services: ["services", "services2"],
//   Comments: null,
//   front_rim: null,
//   rear_rim: null,
//   front_tyre: null,
//   rear_tyre: null,
//   tyre_model: null,
//   built_year: null,
// });
//===========category=======================
//Setter

function setCarSellPostValue(category, value: string | File[] | boolean) {
  _sellCarPost[category] = value;
}

function resetCarSellPostValue(category) {
  _sellCarPost[category] = null;
}

function resetCarSellPostsValue() {
  for (const key in _sellCarPost) {
    resetCarSellPostValue(key);
  }
}

function getCarSellPostValue(category) {
  console.log(category);
  return _sellCarPost[category];
}

function isNullCarSellPostByCate(category) {
  return _sellCarPost[category] == null;
}

function isNullCarSellPosts(cateList) {
  for (const cate in cateList) {
    if (isNullCarSellPostByCate(cate)) {
      return true;
    }
  }
  return false;
}

const formDataAreValid = reactive({
  invalidity: true
})

function formDataInvalidity(value) {
  formDataAreValid.invalidity = value;
  return formDataAreValid.invalidity
}

function returnFormInvalidity(){
  return formDataAreValid.invalidity
}

function findValueFromCate(category, value) {
  return _sellCarPost[category] == value;
}

async function updatePaymentStatus() {
  const formData = new FormData();
  formData.append("dealerID", getAuthUser.value!.uid);
  const response = await useBaseFetch(false)("/api/car-posts/payment", {
    method: "POST",
    body: formData,
  });
  console.log(response);
}

function createFormData() {
  const formData = new FormData();

  //set userid
  formData.append("dealerID", getAuthUser.value!.uid);

  console.log(_sellCarPost);

  for (const key in _sellCarPost) {
    if (Array.isArray(_sellCarPost[key])) {
      if (_sellCarPost[key].length > 0) {
        _sellCarPost[key].forEach((ele) => {
          formData.append(key, ele);
        });
      }
    } else if (_sellCarPost[key]) {
      formData.append(key, _sellCarPost[key]);
    }
  }

  for (const key in _carSellContact) {
    if (_carSellContact[key]) {
      formData.append(key, _carSellContact[key]);
    }
  }

  return formData;
}

async function createPost() {
  const getFormDataSize = (formData) =>
    [...formData].reduce(
      (size, [name, value]) =>
        size + (typeof value === "string" ? value.length : value.size),
      0
    );

  const formData = createFormData();
  // const response = await fetch("http://192.168.31.104:1337/api/car-posts", {
  console.log("formdata size %i Bytes", getFormDataSize(formData));

  const response = await useBaseFetch(false)("/api/car-posts", {
    method: "POST",
    body: formData,
  });
  console.log(response);

  const { success, data, message } = response;

  if (success) {
    console.log(data);
    _sellCarPost.post_id = data.post_id;
  } else {
    console.log(message);
  }
  return { success, message };

  // const imgs: File[] = _sellCarPostTest["Imgs"] as File[];
  // imgs.forEach((img) => {
  //   data.append("Imgs", img);
  // });
}

async function confirmPayment(session_id) {
  const response = await useBaseFetch()("/confirm-payment/" + session_id, {
    method: "POST",
  });
  const { success } = response;
  return success;
}

export default function useSellCarPost() {
  return {
    setCarSellPostValue,
    getCarSellPostValue,
    resetCarSellPostValue,
    resetCarSellPostsValue,
    isNullCarSellPostByCate,
    isNullCarSellPosts,
    findValueFromCate,
    createPost,
    confirmPayment,
    formDataInvalidity,
    returnFormInvalidity
  };
}
