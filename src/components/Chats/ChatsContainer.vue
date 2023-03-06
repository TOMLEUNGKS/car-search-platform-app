<template>
  <div
    class="userChat p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-200"
  >
    <ion-img
      src="https://images.pexels.com/photos/13292768/pexels-photo-13292768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <div class="userChatInfo">
      <span class="font-medium text-lg">Jane</span>
      <p class="text-gray-500 text-sm">Hello</p>
    </div>
  </div>
</template>

<style scoped>
ion-img::part(image) {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
