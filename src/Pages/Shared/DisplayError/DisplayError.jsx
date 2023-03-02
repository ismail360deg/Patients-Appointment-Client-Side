import React from 'react';
import { Link,  useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    

    return (
        <div> 
          <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-600">{error.statusText || error.message}</p>
			<Link to='/' rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-teal-500 text-gray-50" >Back to homepage</Link>
		</div>
	</div>
      </section>

        </div>
    );
};

export default DisplayError;