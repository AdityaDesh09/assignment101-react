#!/bin/bash

mv /home/ec2-user/react/build /var/www/
sudo systemctl restart httpd