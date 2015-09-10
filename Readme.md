# Requirements

Tested versions of required tools:

Ruby

* 1.9.3
* 2.0.0
* 2.2.2

Bundler

* 1.10.6

# Installation and execution

    gem install bundler
    bundle install --path bundler
    npm install
    grunt
    
# Problems

## Windows

### DevKit not installed

    Gem::InstallError: The 'json' native gem requires installed build tools.
    
    Please update your PATH to include build tools or download the DevKit
    from 'http://rubyinstaller.org/downloads' and follow the instructions
    at 'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'
    
Please download the Development-Kit for your ruby version (http://rubyinstaller.org/downloads) and follow the installation instructions on 
(https://github.com/oneclick/rubyinstaller/wiki/Development-Kit)

### SSL Cert Problem

    ERROR:  While executing gem ... (OpenSSL::SSL::SSLError)
        SSL_connect returned=6 errno=0 state=SSLv3 read finished A
        
Use http instead of https sources or try to install the cert manually:

    source 'http://rubygems.org'
    
## Ruby 2.2.x is not compatible with JSON < 1.8.2

Use JSON gem version 1.8.2 and above for ruby 2.2.x

    gem 'json', '1.8.3'
