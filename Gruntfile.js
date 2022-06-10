/*
 * Bibliografia
 * @see https://github.com/browserslist/browserslist
 * */

const path 	= require('path');
const ROOT 	= __dirname;
const nameTheme = 'ccs'
//const Fiber 	= require('fibers');

module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    'use strict';
    /* Configuracion general de las tareas*/
    grunt.initConfig({
        /*views directory*/
	views: 'views',
        /*sources css*/
        src_css: 'public/css',
        /*sources javascript*/
        src_js: 'public/js',
        /*el directorio del tema*/
        theme: 'themes/'+nameTheme,

        /*
         * directorios a limpiar
         *
         * @see https://github.com/gruntjs/grunt-contrib-clean
         * */
        clean: [
            '<%=src_css%>/<%=theme%>/ccs.css'
        ],

        /*
         * Compilar sass
         *
         * @see https://github.com/laurenhamel/grunt-dart-sass
         * */
        'dart-sass': {
            target: {
            options: {
                sourceMap: false,
                //outputStyle: 'compressed',
                //fiber: Fiber,
                noCache: true
            },
                    files: [{
                        expand: true,
                        cwd: '<%=src_css%>/<%=theme%>',
                        src: ['**/**/**/**/*.scss'],
                        dest: '<%=src_css%>/<%=theme%>',
                        ext: '.css'
                    }]
            }
        },
        /*
         * Compilar less
         *
         * @see https://github.com/gruntjs/grunt-contrib-less
         * */
        less: {
            options: {
                plugins: [
                    //new (require('less-plugin-autoprefix'))({
                    //browsers: ["last 2 versions"]
                    //})
                    //,new (require('less-plugin-clean-css'))
                ]
            },
            files: {
                expand: true,
                cwd: '<%=src_css%>/<%=theme%>',
                src: ['**/**/**/**/*.less'],
                dest: '<%=src_css%>/<%=theme%>',
                ext: ".css"
            }
        },
        /*
         * Comprimir los js
         *
         * @see https://github.com/gruntjs/grunt-contrib-uglify
         * */
        uglify: {
            options: {
                mangle: true,
                compress: {
                    drop_console: false
                }
            },
            js: {
                files: [{
                    expand: true,
                    cwd: '<%=src_js%>/<%=theme%>',
                    src: ['**/**/**/**/*.min.js'],
                    dest: '<%=src_js%>/<%=theme%>'
                }]
            }
        },
        /*
         * Browserify hacer todo esto compatible con el browser
         *
         * @see https://github.com/jmreidy/grunt-browserify
         * 
         * Solucionado problema de destino vacio con postBundleCB
         * @see https://github.com/jmreidy/grunt-browserify/issues/350
         * 
         * */
        browserify: {
            development: {
                options: {
                    //extensions: ['.src.js'], /*@FIXME , esto no furula*/
                    browserifyOptions: {
                        debug: false
                    },
                    transform: [
                        ["babelify", {
                            "presets": ["@babel/preset-env"]
                        }]
                    ],
                    plugin: [[
                        "factor-bundle", {
                            outputs: [
                                '<%=src_js%>/<%=theme%>/dash/dash.min.js',
                                '<%=src_js%>/<%=theme%>/bills/bills.min.js',
                                '<%=src_js%>/<%=theme%>/help/help.min.js',
                                '<%=src_js%>/<%=theme%>/payments/payments.min.js',
                                '<%=src_js%>/<%=theme%>/reports/reports.min.js',
                                '<%=src_js%>/<%=theme%>/services/services.min.js',
                            ]
                        }
                    ]
                    //,["minifyify", { map: false }]
                    ],
                    // @see https://github.com/jmreidy/grunt-browserify/issues/350
                    postBundleCB: (err, src, next) => { setTimeout(()=>{ next(err, src); }, 500); }
                },
                src: [
                    '<%=src_js%>/<%=theme%>/dash/dash.src.js',
                    '<%=src_js%>/<%=theme%>/bills/bills.src.js',
                    '<%=src_js%>/<%=theme%>/help/help.src.js',
                    '<%=src_js%>/<%=theme%>/payments/payments.src.js',
                    '<%=src_js%>/<%=theme%>/reports/reports.src.js',
                    '<%=src_js%>/<%=theme%>/services/services.src.js',
                ],
                dest: '<%=src_js%>/<%=theme%>/common/common.min.js'
            },
            production: {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    transform: [
                        ["babelify", {
                            "presets": ["@babel/preset-env"]
                        }]
                    ],
                    plugin: [[
                        "factor-bundle", {
                            outputs: [
                                '<%=src_js%>/<%=theme%>/dash/dash.min.js',
                                '<%=src_js%>/<%=theme%>/bills/bills.min.js',
                                '<%=src_js%>/<%=theme%>/help/help.min.js',
                                '<%=src_js%>/<%=theme%>/payments/payments.min.js',
                                '<%=src_js%>/<%=theme%>/reports/reports.min.js',
                                '<%=src_js%>/<%=theme%>/services/services.min.js',
                            ]
                        }
                    ]
                    //,["minifyify", { map: false }]
                    ],
                    // @see https://github.com/jmreidy/grunt-browserify/issues/350
                    postBundleCB: (err, src, next) => { setTimeout(()=>{ next(err, src); }, 500); }
                },
                src: [
                    '<%=src_js%>/<%=theme%>/dash/dash.src.js',
                    '<%=src_js%>/<%=theme%>/bills/bills.src.js',
                    '<%=src_js%>/<%=theme%>/help/help.src.js',
                    '<%=src_js%>/<%=theme%>/payments/payments.src.js',
                    '<%=src_js%>/<%=theme%>/reports/reports.src.js',
                    '<%=src_js%>/<%=theme%>/services/services.src.js',
                ],
                dest: '<%=src_js%>/<%=theme%>/common/common.min.js'
            },
        },

        /*
         * watch para monitorizar los cambios
         *
         * @see https://github.com/gruntjs/grunt-contrib-watch
         * Solucionado problema de lentitud con spawn: false
         * */
        watch: {
            'browserify': {
                files: ['<%=src_js%>/<%=theme%>/**/**/**/**/*.src.js'],
                tasks: ['browserify:development'],
                options: {
                    livereload: {
                        host: 'localhost',
                        //port: 35729,
                        //key: grunt.file.read('path/to/ssl.key'),
                        //cert: grunt.file.read('path/to/ssl.crt')
                    },
                    spawn: false
                }
            },
            'dart-sass': {
                files: ['<%=src_css%>/<%=theme%>/**/**/**/**/*.scss'],
                tasks: ['clean' , 'dart-sass'],
                options: {
                    livereload: {
                        host: 'localhost',
                        //port: 35729,
                        //key: grunt.file.read('path/to/ssl.key'),
                        //cert: grunt.file.read('path/to/ssl.crt')
                    },
                    spawn: false
                }
            },
            'less': {
                files: ['<%=src_css%>/<%=theme%>/**/**/**/**/*.less'],
                tasks: ['clean' ,'less'],
                options: {
                    livereload: {
                        host: 'localhost',
                        //port: 35729,
                        //key: grunt.file.read('path/to/ssl.key'),
                        //cert: grunt.file.read('path/to/ssl.crt')
                    },
                    spawn: false
                }
            },
            'views': {
                files: ['<%=views%>/<%=theme%>/**/*.html'],
                options: {
                    livereload: {
                        host: 'localhost',
                        //port: 35729,
                        //key: grunt.file.read('path/to/ssl.key'),
                        //cert: grunt.file.read('path/to/ssl.crt')
                    },
                    spawn: false
                }
            }
        },
        /*
         * post proceso de los css
         *
         * @see https://github.com/nDmitry/grunt-postcss
         * 
         * */
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')   //Añadir los prefijos 
                    //,require('postcss-clean') //Minimizar y limpiar los css
                ]
            },
            dist: {
                src: '<%=src_css%>/<%=theme%>/**/**/**/**/*.css'
            }
        },
        /*
         * purifycss , optimiza los css
         *
         * @see https://github.com/purifycss/grunt-purifycss
         * 
         * */
        purifycss: {
            options: {
                minify: true,
                whitelist: [
                    '*:not*'
                ]
            },
            target: {
                src: [
                    '<%=views%>/<%=theme%>/**/**/*.html',
                    '<%=src_js%>/<%=theme%>/**/**/**/**/*.min.js'
                ],
                css: ['<%=src_css%>/<%=theme%>/ccs.css'],
                dest: '<%=src_css%>/<%=theme%>/ccs.min.css'
            }
        }
    });
    /* loadNpmTasks carga todas las tareas */
    /*cargo browserify*/
    grunt.loadNpmTasks('grunt-browserify');
    /*cargo uglify */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /*cargo cssmin  */
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    /*cargo dart-sass   */
    grunt.loadNpmTasks('grunt-dart-sass');
    /*cargo less   */
    grunt.loadNpmTasks('grunt-contrib-less');
    /*cargo watch*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*Cargo el watch*/
    //grunt.loadNpmTasks('grunt-este-watch');
    /*cargo clean*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    /*cargo purifycss*/
    grunt.loadNpmTasks('grunt-purifycss');
    /*cargo postcss*/
    grunt.loadNpmTasks('grunt-postcss');
    /*el builder  <grunt build> */
    grunt.registerTask('build', ['browserify:production', 'clean', 'dart-sass', 'less', 'postcss', 'purifycss', 'uglify']);
    /*el watcher  <grunt monitor>*/
    grunt.registerTask('monitor', ['browserify:development', 'clean', 'dart-sass', 'less', 'postcss', 'purifycss','watch']);
};

//for f in *.less; do 
    //mv -- "$f" "${f%.less}.lessc"
//done
