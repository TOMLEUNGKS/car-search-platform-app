import { mount } from "@vue/test-utils";
import SearchCarPage from "@/views/SearchCar/SearchCar.vue";

describe("Tab1Page.vue", () => {
  it("renders tab 1 Tab1Page", () => {
    const wrapper = mount(SearchCarPage);
    expect(wrapper.text()).toMatch("Search car page");
  });
});
