// 07-performance-ssr-vs-csr/src/app/register/page.tsx
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      alert('Registrado con éxito. Revisa tu email.');
    }
  };

  const form = useForm();
  return (
    <Card className="max-w-md mx-auto mt-2">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleRegister} className="space-y-4">
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

            <Button type="submit">Registrarse</Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
