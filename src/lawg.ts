import core from "@actions/core";

async function run() {
  const URL = `https://api.lawg.dev/v1/projects/${process.env.LAWG_PROJECT}/feeds/${process.env.LAWG_FEED}/events`;

  try {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        title: process.env.LAWG_TITLE,
        description: process.env.LAWG_DESCRIPTION,
        emoji: process.env.LAWG_EMOJI,
        notify: process.env.LAWG_NOTIFY,
      }),
      headers: {
        Authorization: process.env.LAWG_TOKEN as string,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        core.setOutput("output", "Successfully created your event!");
      }
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
