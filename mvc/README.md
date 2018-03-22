# opennet
# asp.net core with .net core to run in cross platform

https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x

dotnet restore
dotnet build
dotnet run --project
dotnet publish

https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?tabs=aspnetcore2x

sudo nano /etc/systemd/system/kestrel-hellomvc.service


[Unit]
Description=Example .NET Web API App running on Ubuntu

[Service]
WorkingDirectory=/var/aspnetcore/hellomvc
ExecStart=/usr/bin/dotnet /var/aspnetcore/hellomvc/hellomvc.dll
Restart=always
RestartSec=10  # Restart service after 10 seconds if dotnet service crashes
SyslogIdentifier=dotnet-example
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target


systemctl enable kestrel-hellomvc.service

systemctl start kestrel-hellomvc.service
systemctl status kestrel-hellomvc.service
