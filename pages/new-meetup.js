import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    // send request to new-meetup in api folder
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.replace("/");
  }
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetup;
