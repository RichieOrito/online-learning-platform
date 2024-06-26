import axios from 'axios';

export default async function handler(req: { method: string; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://your-spring-boot-api-url/api/auth/login', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('API login error:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
