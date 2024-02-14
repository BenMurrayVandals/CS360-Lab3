<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-2xl font-bold" id="exampleModalLabel">Modal</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Pretium nibh ipsum consequat nisl. Risus in hendrerit gravida rutrum quisque non tellus orci.
          Quis blandit turpis cursus in hac habitasse. Vitae ultricies leo integer malesuada. Facilisi morbi tempus
          iaculis urna id volutpat lacus. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Id eu
          nisl nunc mi ipsum faucibus vitae. Erat imperdiet sed euismod nisi porta lorem mollis. Nulla aliquet porttitor
          lacus luctus accumsan tortor. Porttitor lacus luctus accumsan tortor posuere. Amet risus nullam eget felis
          eget. Duis ultricies lacus sed turpis. Maecenas pharetra convallis posuere morbi leo urna. Quis commodo odio
          aenean sed adipiscing diam donec adipiscing. In tellus integer feugiat scelerisque varius morbi.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close (but blue)</button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-start justify-center min-h-screen p-8 bg-black">
    <!-- IMAGES -->
    <slot></slot>
    <!-- SIDE PANEL -->
    <div class="flex flex-col items-end justify-start gap-y-16 w-96 text-white font-bold uppercase">
      <h1 class="text-3xl">Shutter</h1>
      <ul class="flex flex-col gap-y-4 text-right">
        <NuxtLink v-for="page in pages" :to="page === 'Home' ? '/' : `/${page.toLowerCase()}`">
          <li
            :class="[activePage === page ? ' text-orange-400' : 'hover:text-slate-300 hover:cursor-pointer']"
            class="transition-colors duration-300"
          >
            {{ page }}
          </li>
        </NuxtLink>
      </ul>
      <div class="flex items-center justify-center gap-x-4">
        <div v-for="icon in icons" class="flex items-center justify-center rounded-full">
          <div class="bg-black w-6 h-6 m-2 rounded-full">
            <NuxtLink :to="getIconRoute(icon)" target="_blank">
              <img
                v-if="icon === 'Facebook'"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///+AgIBSUlKHh4fLy8vGxsbx8fE3NzfIyMgJCQm4uLi/v78MDAwWFhYcHBwkJCTY2NjS0tJ6enqfn5+lpaWsrKz4+Pirq6ve3t4fHx+ysrIoKChpaWmRkZGYmJhfX18/Pz9NTU1ycnKMjIwxMTHn5+dZWVk9PT1mZmZHR0d/Vpa5AAADwElEQVR4nO3djVLiMBiFYcpfkYJIAUv5EQQE9f4vcHfGnR1ZQfhCNuc0nvcCnDxjOyltmtZqoPr3s0Vns15ut9vRaFT/U/N39b+NPqq/owbp2uy5sWxO2mVybU/oEVsabLZPj8PialzVhOtVZtVVSbjY9a4/MCso7ExKh/9ehYTj1JVXDeHS+d9XDeF77yZfkqzQgu8bjPY3ApNVF434rsVNZ2AFhLP5bacgv/DWU/BD2Eczzpf5ADILp16AxMKmH2AyvkdLzrS+eZogF77mnoC0wpWHeYJaePB1jCbJhFJ4P/EGJBU2vB2jpMKup6mQV/jiEZhMBmjOierRCx3vOVVHOPMJTKaEQq8HaTKdoT1f83bBxirse5wMOYXr6IUrr8DkkU/Y8iucP6BBX/I6GzIKF9ELN/5+GpIKt7ff5iYX7vxOFoTCsWdhtkCL/s3l12+xL4d53jpV/kQ3H86tvDRb1ZeHzfvza+dUC7onM9anFfma7jC8kFG4r5rP/EitgR6vPZtwjx6uQzbhI3q4DrVNwhF6uA7ZhBU8DWt3JmEHPVx7XZuwenNFrW8T0l1WX+7edhOD8HbvpeIXDmxCxkdnF5LwpwkL2gVP55tFL3yQUEL6JDwulZAwCX+acC8hYTZhKSFhNuGQ7sHS5eIX2n4f5ujhftfi0DjV29AiLE/+jaNeYaeqr7d+LpXBbqn6XUV6PtybXaGEOxQwmLAeu7DYxi5M32IXlofYhTluB55AwjbuKXEgIXDhXiDhHPfsJpBwCgOGEo6jFwI3bwkjLHCXpYGEKXBZWBjhfhm7EHjRFkg4BG6bGEbYeoldeAdcNBVG2MMBJfRUFr0QeOEdRlgg9xQMIkxx9xIDCZEXbYGEyLcVgghL5NsKYYTI1yuDCIdAoIR+akcvhL68F0JYQDeCDiFMkRN+bVSkJzMRivbZetl82oS+i//86VsUn2qatjYpkQLHurZ1bdGviariyj0JJeTPJox/9aWEjEkoIX/xC207DkjImIQS8ifhcbmEhEkoIX/xC227mUnImIQS8ifhcS0JCZNQQv7iF9r2Ea6i0LYXtISUSSghfybhXfRC6ApZ12zC+P+HEjImoYT8mb4zIyFlEkrIn0mIfN3eOQkl5E9CCfmTUEL+TELkBjvOSSghf6YvHktImYQS8mcSztGjdUlCCfmTUEL+JJSQP5MQuuOcaxJKyJ+EEvIn4VHITeWdMwkn6NG6FL8wk1BC+iSUkD8Jf5gQ+IVK9ySUkD8JJeQv/t+H6+b17f73J7l+AUFEY+1ZpC7vAAAAAElFTkSuQmCC"
                alt=""
                class="p-px w-full h-full"
              />
              <img
                v-else-if="icon === 'Twitter'"
                src="data:image/png;base64,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"
                alt=""
                class="p-px w-full h-full"
              />
              <img
                v-else-if="icon === 'Instagram'"
                src="https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"
                alt=""
                class="p-px w-full h-full"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activePage: string;
}>();

const pages = ["Home", "Photos", "Bio", "Blog", "Contact"];
const icons = ["Facebook", "Twitter", "Instagram"];

const getIconRoute = (icon: string) => {
  switch (icon) {
    case "Facebook":
      return "https://www.facebook.com/";
    case "Twitter":
      return "https://www.x.com/";
    case "Instagram":
      return "https://www.instagram.com/";
  }
};
</script>
