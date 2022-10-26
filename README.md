# 2022-haid-app

## Warm-Up Task
I have given everyone a warm-up task on the Kanban board. Assign the ticket to yourself and then complete the task as though it was a real ticket.

## Working with the Kanban board

https://tree.taiga.io/project/vincent-zhao-human-ai-interaction-design-haiid/taskboard/sprint-four-code
All the tickets for the code will be in "Sprint-Four-Code and report". When you pick up a ticket you want to assign the ticket to yourself and move it into the "In Progress" lane. Once you have submitted a pull request for your work you will want to move it into the "Ready For Test" lane. I will review PRs and move tickets into the "Closed" lane.

## Working with GitHub

Clone this repo to your personal machine

Make a branch for your ticket with the naming scheme [TICKET_NUMBER]_[TICKET_NAME]. Probably easiest to make new branches with the GitHub web interface.

To checkout this new branch on your machine run
```
git fetch
git checkout [branch_name]
```

### Pushing your changes to the remote repository using CLI

Once you've completed your task you'll want to commit your changes to your local branch
```
git add [edited_file]
git add [edited_directory]
git add . # <- this probably isn't best practice in a corporate environment but this is what I use. Run this in the root directory and all modified files will be added to your commit.

git commit -m "descriptive message detailing the change"
```

This has only updated your local branch however, to push your changes to the remote branch you'll need to give yourself an access token. This is basically just a password. Go to https://github.com/settings/tokens and generate a classic token with repo privileges. Copy this token and save it somewhere. Then you want to run this command to push your changes to your remote branch.
```
git push
```

It will ask for your credentials which is your GitHub username and the access token you just generated.

### Pushing your changes to the remote repository using the web interface

All of the above can be done using just the github.com website too if you don't want to faff around with access tokens, might just be a little bit slower and also slightly less fine-grained version control. Be very careful that you are making your updates to your branch and not the master branch. The combination of web interface and cli written above is just what I personally find easiest.

Once you've pushed your commits to the remote branch you'll want to create a pull request, here you can write some additional comments. I recommend using the web interface for this. I will go through pull requests frequently and merge them into the master branch as and when is appropriate. If you have an outstanding pull request and need to use the code in that branch for the next ticket, create your new branch off of your old one. We'd like to try to avoid doing this but it is inevitable as I won't be available 24/7 to review pull requests.

## Working with Expo

I highly recommend using Expo Go on your mobile. This means you can test the app on your phone with live updates without having to mess about using virtual machines.

I am using Expo on a wsl2 instance on my Windows machine. I installed it with
```
sudo npm i -g expo-cli
```

And you can launch the app by running this command in the HAIDapp directory.
```
sudo expo start
```

And you should see a QR code that you can scan on your phone using the Expo Go app.

## Helpful links

https://docs.expo.dev/tutorial

https://reactnative.dev/docs

https://www.youtube.com/watch?v=ANdSdIlgsEw
