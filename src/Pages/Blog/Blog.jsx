import img1 from '../../assets/db.png'
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.jpg'

const Blog = () => {
    return (
        <div className='px-4 lg:px-12'>
            {/* first question */}
            <div className='py-7  mx-auto md:flex gap-3'>
                <div className="md:w-2/5">
                    <img  src={img1} alt="" />
                    
                </div>
                <div className="md:w-3/5">
                    <h3 className='font-bold text-center md:text-left'> What is One way data binding?</h3>
                    <p className='py-2 text-[10] lg:text-[14]'>
                   <span className='font-bold'> Data Source: </span>  You have a data source, which can be an object, a model, or the 
                    applications state. This source contains the data that you want to display in the user interface.
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>View:</span>The view is the part of the user interface where you want to display this data.
                     This can be an HTML template, a component, or any element where data is rendered.
                    </p >
                    <p className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'>Binding:</span>One-way data binding connects the data source to the view, usually in the form of placeholders or bindings within the view.
                     These bindings indicate where data from the source should be displayed.
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>Initial Rendering:  </span>When the page or component is initially loaded, the data from the data source is used to populate the view.
                     Any changes in the data source are automatically reflected in the view
                    </p>
                    <p  className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'> User Interaction: </span> If theres user interaction (like clicking a button or filling a form),
                     it might trigger an action that changes the data source.
                    </p>

    
                </div>
            </div>
            {/* second question  */}
            <div className='py-7  mx-auto md:flex gap-3'>
                <div className="md:w-2/5">
                    <img  src={blog2} alt="" />
                    
                </div>
                <div className="md:w-3/5">
                    <h3 className='font-bold text-center md:text-left'> What is NPM in node.js?</h3>
                    <p className='py-2 text-[10] lg:text-[14]'>
                   <span className='font-bold'> Package Management: </span> NPM is primarily used for installing, updating, and managing packages, 
                   which are reusable blocks of code that can be easily integrated into your Node.js projects.
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>Dependency Resolution:</span>NPM handles the complex task of resolving and 
                    managing dependencies between packages. When you install a package, NPM automatically installs
                     any other packages it relies on, ensuring that your application has all the required dependencies.
                    </p >
                    <p className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'>Version Control:</span> NPM allows you to specify which versions of packages your project depends on.
                     This helps maintain consistency and avoid breaking changes when you update your project.
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>Publishing Packages:</span>If you are a package author, 
                    NPM allows you to publish your own packages to the registry so that other developers can use them.
                    </p>
                    <p  className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'>Security: </span> 
                    NPM provides security features to help protect your project from installing packages with known vulnerabilities.
                     It offers tools to audit your projects dependencies for security issues.
                    </p>

    
                </div>
            </div>

            {/* third question */}
            <div className='py-7  mx-auto md:flex gap-3'>
                <div className="md:w-2/5">
                    <img  src={blog3} alt="" />
                    
                </div>
                <div className="md:w-3/5">
                    <h3 className='font-bold text-center md:text-left'> Different between Mongodb database vs mySQL database ?</h3>
                    <p className='py-2 text-[10] lg:text-[14]'>
                   <span className='font-bold'> MongoDB: </span> MongoDB is a NoSQL database that uses a flexible, schema-less data model.
                    It stores data in BSON (Binary JSON) format and is well-suited for unstructured or semi-structured data. Its ideal for applications with evolving data requirements
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>MySQL: </span>MySQL is a relational database management system (RDBMS) that uses a structured, tabular data model with fixed schemas. 
                    Its best for applications with well-defined and consistent data structures.
                    </p >
                    <p className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'>MongoDB:</span>MongoDB has a dynamic schema, which means that different documents in the same collection can have different fields. 
                    This flexibility is great for rapidly changing data.
                    </p>
                    <p className='text-[10] lg:text-[14]'>
                    <span className='font-bold'>MySQL: </span>
                    MySQL has a static schema, where the structure of tables and fields must be defined in advance.

                    </p>
                    <p  className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'> MongoDB:</span> 
                    MongoDB uses a query language that is based on JavaScript and supports a wide range of query operations, 
                    including geospatial queries.
                    </p>

                    <p  className='py-2 text-[10] lg:text-[14]'>
                    <span className='font-bold'> MySQL: </span> 
                    MySQL uses SQL (Structured Query Language),
                     which is the standard language for relational databases.
                    </p>

    
                </div>
            </div>

         
            
        </div>
    );
};

export default Blog;