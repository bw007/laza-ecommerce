<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet';

</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button variant="outline" class="w-12 h-12 !p-2 border-none bg-background hover:bg-neutral-200 rounded-full flex items-center justify-center active:opacity-75">
        <img src="@/assets/images/bar-icon.svg" alt="Menu">
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="py-11 px-5">
      <SheetHeader>
        <SheetTitle>
          <img src="@/assets/images/logo.svg" alt="Logo">
        </SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
