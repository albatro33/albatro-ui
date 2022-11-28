pipeline {
  agent any
  tools{
    nodejs "nodejs"
  }
  
  stages {
    stage("install"){
      steps {
        sh "npm install -g yarn"
        sh "yarn"
      }
    }
  
    stage("build") {
      steps {
        sh "yarn build"
      }
    }

    stage("copy build") {
      steps {
        sh "cp -r dist /var/www/albatro33.com"
      }
    }
  }
}