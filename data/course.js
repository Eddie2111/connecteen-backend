  const courses = [
    {
      name: 'Python',
      description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.',
      image: '/python.png',
      link: 'https://www.youtube.com/watch?v=rfscVS0vtbw'
    },
    {
      name: 'Cpp',
      description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
      image: '/cpp.png',
      link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y'
    },
    {
      name: 'Java',
      description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
      image: '/java.png',
      link: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
    },
    {
      name: 'JavaScript',
      description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
      image: '/js.png',
      link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk'
    },
    {
      name: 'HTML',
      description: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
      image: '/html.png',
      link: 'https://www.youtube.com/watch?v=UB1O30fR-EE'
    },
    {
      name: 'CSS',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
      image: '/css.png',
      link: 'https://www.youtube.com/watch?v=1PnVor36_40'
    },
    {
      name: 'C',
      description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computers ranging from supercomputers to embedded systems.',
      image: '/c.png',
      link: 'https://www.youtube.com/watch?v=KJgsSFOSQv0'
    },
    {
      name: 'C#',
      description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). C# is one of the programming languages designed for the Common Language Infrastructure.',
      image: '/csharp.png',
      link: 'https://www.youtube.com/watch?v=GhQdlIFylQ8'
    },
    {
      name: 'PHP',
      description: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.',
      image: '/php.png',
      link: 'https://www.youtube.com/watch?v=OK_JCtrrv-c'
    },
    {
      name: 'SQL',
      description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.',
      image: '/sql.png',
      link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
    },
    {
      name: 'Ruby',
      description: 'Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.',
      image: '/ruby.png',
      link: 'https://www.youtube.com/watch?v=t_ispmWmdjY'
    },
    {
      name: 'Swift',
      description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple\'s Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6.',
      image: '/swift.png',
      link: 'https://www.youtube.com/watch?v=H0XScE08hy8'
    },
    {
      name: 'Machine Learning',
      description: 'Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so.',
      image: '/ml.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    {
      name: 'Deep Learning',
      description: 'Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.',
      image: '/dl.png',
      link: 'https://www.youtube.com/watch?v=aircAruvnKk'
    },
    {
      name: 'Data Science',
      description: 'Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, machine learning and big data.',
      image: '/ds.png',
      link: 'https://www.youtube.com/watch?v=aircAruvnKk'
    },
    {
      name: 'Artificial Intelligence',
      description: 'Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and other animals. In computer science AI research is defined as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.',
      image: '/ai.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    {
      name: 'Blockchain',
      description: 'A blockchain, originally block chain, is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way".',
      image: '/blockchain.png',
      link: 'https://www.youtube.com/watch?v=SSo_EIwHSd4'
    },
    {
      name: 'Image Processing',
      description: 'Image processing is a method to perform some operations on an image, in order to get an enhanced image or to extract some useful information from it. In general, digital image processing is the use of computer algorithms to perform image processing on digital images. As a subcategory or field of digital signal processing, digital image processing has many advantages over analog image processing.',
      image: '/ip.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    {
      name: 'Computer Vision',
      description: 'Computer vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do.',
      image: '/cv.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    {
      name: 'Natural Language Processing',
      description: 'Natural language processing (NLP) is a subfield of linguistics, computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data. Challenges in natural language processing frequently involve speech recognition, natural language understanding, and natural-language generation.',
      image: '/nlp.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
]

function indexing(x,courses) {
    const data = courses.findIndex(item => item.name === x);
    const returndata = courses[data];
    return returndata;
}


module.exports = {indexing,courses};