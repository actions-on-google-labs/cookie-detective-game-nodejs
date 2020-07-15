#### Google Cloud Project console
https://console.cloud.google.com/home/dashboard?project=cookie-detective
#### Firebase console (webhook)
https://console.firebase.google.com/project/cookie-detective/functions/list
#### Action Builder console
https://console.actions.google.com/project/cookie-detective/overview

### How to run it on device or simulator
##### First time setup
- `ssh-copy-id cookie-detective-agent-local@eu.dev.monkapps.com` and enter the SSH password
- `ssh-copy-id cookie-detective-view-local@eu.dev.monkapps.com` and enter the SSH password
- From the project root: `agent/tools/gactions login`. If you encounter errors, try: `chmod a+x agent/tools/*`
##### To run:
- From the project root: `yarn test`

Notes:
- Make sure your google account has the right permissions and all the tracking settings are enabled (yes, they are required).
- Only one test on device can run at a time, so make sure other team members are not running a it
