type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  console.log(`Current status is: ${status}`);
}

logStatus("loading");
logStatus("success");
logStatus("error");