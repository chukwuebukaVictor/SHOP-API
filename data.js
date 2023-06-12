import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'victor',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
  {
    name: 'john',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false
  }
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 18,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Addidas Fit Shirt',
      slug: 'addidas-fit-shirt',
      category: 'shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Addidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality products',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'shirt',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'Addidas Fit Pant',
      slug: 'addidas-fit-pant',
      category: 'pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};

export default data;
