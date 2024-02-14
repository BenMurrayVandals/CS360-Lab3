<template>
  <PageContent activePage="Contact">
    <div class="flex items-center justify-center my-12 container">
      <form class="flex flex-col gap-y-4 w-1/2">
        <div>
          <label for="firstName" class="text-white font-bold uppercase">First Name</label>
          <input type="text" class="form-control" id="firstName" />
        </div>
        <div>
          <label for="lastName" class="text-white font-bold uppercase">Last Name</label>
          <input type="text" class="form-control" id="lastName" />
        </div>
        <div class="flex flex-col">
          <label for="subject" class="text-white font-bold uppercase">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            class="form-control h-[200px] p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-600 text-lg text-white font-bold w-max py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  </PageContent>
</template>
