When logging into the bot, the following data is collected:
1. Your Discord ID
	- This is used to associate your Epic account with your Discord account.
2. Your Epic Games Account ID
3. Your Epic Games Device ID & Secret auth token.
	- This is used to log into the API and collect free llamas and item claims.
4. Your Epic Games Display Name
	- This is cached at the time of login and can be updated with the `update` command.
	
This data is stored until deleted by the user, or the login is invalid. Logins can be invalidated by the user initiating a password reset or randomly by Epic Games.