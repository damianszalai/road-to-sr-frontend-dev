// 07-performance-ssr-vs-csr/src/app/login/page.tsx
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      alert('Login exitoso!');
    }
  };


  return (
    <Card className="max-w-md mx-auto mt-2">
      <CardHeader>
        <CardTitle> Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleLogin} className="space-y-4">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </FormControl>
            </FormItem>
            <Button type="submit">Iniciar sesión</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
