<script setup lang="ts">
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
    <SheetTrigger class="w-12 h-12 bg-background rounded-full flex items-center justify-center active:opacity-65">
      <img src="@/assets/images/bar-icon.svg" alt="Menu">
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>