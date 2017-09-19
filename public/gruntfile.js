/**
 * A basic gruntfile with browserSync and autoprefixer
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions', 'ie 11']
            },
            dist: {
                files: {
                    'build/css/prefix-main.css': 'css/main.css'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ["css/main.css", "../templates/*.html.twig"]
                },
                options: {
                    proxy: "http://127.0.0.1:8888"
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
};
