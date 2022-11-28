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

    stage("move build") {
      steps {
        sh "mv build /var/www/albatro33.com"
      }
    }
  }
}