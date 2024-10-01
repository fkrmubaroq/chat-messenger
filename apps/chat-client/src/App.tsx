import { Avatar, Button, Text } from "@chat-message/ui"

function App() {
   return (
      <>
         Hellow
         <Button variant="primary" size="xl" rounded="sm">
            Edaan
         </Button>
         <Avatar
            size="size-24"
            src="https://lineone.piniastudio.com/images/avatar/avatar-8.jpg"
         />
         <Avatar
            isInitial
            initial="FM"
            variant="secondary"
            size="size-8"
            classNameInitial="text-xs"
         />
         <Text typography="h1">asdasd</Text>
      </>
   )
}

export default App
